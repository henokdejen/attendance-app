const ActionTypes = {
    OPEN_DRAWER: 0,
    CLOSE_DRAWER: 1,
    CHANGE_PAGE_TITLE: 2,
    SHOW_PROGRESS: 3,
    CLOSE_PROGRESS: 4,
    SET_DATE: 5
};

const openDrawerAction = () => ({
    type: ActionTypes.OPEN_DRAWER
});

const closeDrawerAction = () => ({
    type: ActionTypes.CLOSE_DRAWER
});

const changePageTitle = ({title = "No title!"}) => ({
    type: ActionTypes.CHANGE_PAGE_TITLE,
    title: title
});

const showProgress = () => ({
    type: ActionTypes.SHOW_PROGRESS
});

const closeProgress = () => ({
    type: ActionTypes.CLOSE_PROGRESS
});

const setDate = (date) => ({
    type: ActionTypes.SET_DATE,
    date
}) 

exports.ActionTypes = ActionTypes;
exports.openDrawerAction = openDrawerAction;
exports.closeDrawerAction = closeDrawerAction;
exports.changePageTitle = changePageTitle;
exports.showProgress = showProgress;
exports.closeProgress = closeProgress;
exports.setDate = setDate
