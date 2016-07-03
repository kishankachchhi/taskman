(function(){

    angular
        .module('tasks')
        .controller('TaskController', [
            'taskService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
            TaskController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function TaskController( taskService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
        var self = this;

        self.selected     = null;
        self.tasks        = [ ];
        self.selectTask   = selectTask;
        self.toggleList   = toggleTasksList;
        self.makeContact  = makeContact;

        // Load all registered tasks

        taskService
            .loadAllTasks()
            .then( function( tasks ) {
                self.tasks    = [].concat(tasks);
                self.selected = tasks[0];
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleTasksList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectTask ( task ) {
            self.selected = angular.isNumber(task) ? $scope.tasks[task] : task;
        }

        /**
         * Show the Contact view in the bottom sheet
         */
        function makeContact(selectedTask) {

            $mdBottomSheet.show({
                controllerAs  : "vm",
                templateUrl   : './src/views/taskPallet.html',
                controller    : [ '$mdBottomSheet', ContactSheetController],
                parent        : angular.element(document.getElementById('content'))
            }).then(function(clickedItem) {
                $log.debug( clickedItem.name + ' clicked!');
            });

            /**
             * Task ContactSheet controller
             */
            function ContactSheetController( $mdBottomSheet ) {
                this.task = selectedTask;
                this.items = [
                    { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
                    { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
                    { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
                    { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
                ];
                this.contactTask = function(action) {
                    // The actually contact process has not been implemented...
                    // so just hide the bottomSheet

                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();