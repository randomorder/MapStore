/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */

GeoExt.Lang.add("en", {
    "MSMGridPanel.prototype": {
        msg: "Loading...",
        textSearch: "Search",
        tooltipSearch: "Reset All Filters",
        textReset: "Reset",
        tooltipReset: "Reset All Filters",
        gridResourceId: "Resource Id",
        gridName: "Name",
        gridOwner: "Owner",
        gridDescription: "Description",
        gridDateCreation: "Date Creation",
        gridLastUpdate: "Last Update",
        errorTitle: "Request failure",
        errorMsg_500: "The server returns HTTP status code 500! </br></br>Check the log!",
        errorMsg_501: "The server returns HTTP status code 501! </br></br>The server does not support all that is needed for the request to be completed!",
        errorMsg_404: "The server returns HTTP status code 404! </br></br>The resource you are looking for cannot be found!",
        errorMsg_timeout: "Request Timeout!",
		textUserManager: 'User Manager',
        textViewMap: '', //"View Map",
        tooltipViewMap: "View Map",
        textEmbedMap: '', //"Embed Map",
        tooltipEmbedMap: "Embed Map",
        textCopyMap: '', //"Clone Map",
        tooltipCopyMap: "Clone Map",
        textEditMap: '', //"Edit Map",
        tooltipEditMap: "Edit Map",
        textDeleteMap: '', //"Delete Map",
        tooltipDeleteMap: "Delete Map",
        textEditMetadata: '', //"Edit Metadata",
        tooltipEditMetadata: "Edit Info",
        textSubmitEditMetadata: "Update",
        tooltipSubmitEditMetadata: "Update Info",
        titleConfirmCloseEditMetadata: 'Confirm',
        textConfirmCloseEditMetadata: 'Close window without saving?',
        metadataSaveSuccessTitle: "Success",
        metadataSaveSuccessMsg: "Metadata saved succesfully",
        metadataSaveFailTitle: "Metadata not saved succesfully",
        textClose: "Close",
        msgSaveAlertTitle: "Attention, your map is not saved!",
        msgSaveAlertBody: "Do you really want to quit without saving it?",
        tooltipClose: "Close Map",
        msgDeleteMapTitle: "Attention",
        msgDeleteMapBody: "Do You want to delete this map?",
        msgSuccessDeleteMapTitle: "Success",
        msgSuccessDeleteMapBody: "Map has been deleted",
        msgFailureDeleteMapTitle: "Failed",
        msgFailureDeleteMapBody: "Something wrong has appened",
        IframeViewerTitle: "Map Viewer - ",
        IframeComposerTitle: "Map Composer - ",
        IframeWaitMsg :"Loading map",
		showMapTooltip: "Show in a new Window",
		embedCodeTitle: "Embed Code",
		embedURL: "Direct URL",	
		embedUrlLabel: "EMBED",
		composerUrlLabel: "FULL",
		exportMapText: "Link Map",
        mobileText:"Mobile",
        installApplicationText:"Install Android Application",
        loadThisSourceText:"Add this source to MapStore Mobile",
        scanThisApplicationText:"Scan this QR code to Install MapStore for Android",
        scanThisSourceText:"Scan this QR code to add this source to your MapStore Mobile application. You need to install MapStore for Android before",
        mapPermissionText: "Permissions",
        tooltipMapPermissionText: "Edit map permissions by group",
        mapPermissionTitleText: "Map Permissions"
    },
    "MSMPagingToolbar.prototype": {
        desc: "New Map",
        textNewMap: "New Map",
        tooltipNewMap: "Create New Map",
        textExpandAll: "Expand All",
        tooltipExpandAll: "Expand All records",
        textCollapseAll: "Collapse All",
        tooltipCollapseAll: "Collapse All records",
        displayMsg: "Displaying results {0} - {1} of {2}",
        emptyMsg: "No results to display",
        firstText: "First Page",
        lastText: "Last Page",
        nextText: "Next Page",
        prevText: "Previous Page",
        refreshText: "Refresh",
        beforePageText: "Page",
		afterPageText : "of {0}",
		resizerText: "Maps per page"
    },
    "MSMPanel.prototype": {
        title : "MapManager"
    },
    "MSMLogin.prototype": {
        loginText: "Login",
        logoutText: "Logout",
        ruleText: "USER LOGGED: {user}",
        loginErrorText: "Invalid username or password.",
        loginErrorTitle: "Login failed.",
        userFieldText: "User",
        passwordFieldText: "Password",
        loginFormTitle: "Please Login",
        loginWaitMessage: "Logging in. Please wait..."
    },
    "UserManagerView.prototype":{
        textGeneral:"General",
        textAttributes:"Attributes",
        textGroups:"Groups",
        textServices: "Services",
		textName: 'Name',
		textPassword: 'Password',
		textPasswordEdit: 'New Password',
		textPasswordConf: 'Confirm Password',
		textPasswordConfError: 'Password not confirmed', 		
		textBlankUserName: 'Name should not be null',
		textBlankPw: 'Password should not be null',
		textBlankRole: 'Role should be selected',		
		tooltipEdit: 'Edit user data',
		textEditUserTitle: 'Edit user data',
		displayMsg: "Displaying results {0} - {1} of {2}",
		beforePageText: "Page",
		afterPageText : "of {0}",
		textRole: 'Role',
		tooltipDelete: 'Delete this user',
		textDelete: 'Delete',
		tooltipSave: 'Save this user',
		textSave: 'Save',
		tooltipCancel: 'Cancel saving',
		textCancel: 'Cancel',
		invalidFormMsg: 'Some fields are invalid',
		textAddUser: '', 
		textAddUserTitle: 'Add User',
		tooltipAddUser: 'Create a new user',
		textTitle: 'User Manager',
		tooltipSearch: "Search",
		userAlreadyTaken: 'User name has been already taken',
		textSelectRole: 'Select a role...',
		titleConfirmDeleteMsg: "Confirm delete user",
		textConfirmDeleteMsg: "Are you sure you want to delete this user?",
        textManageGroups: "Manage Groups"
	},
    "MSMUserGroupManager.prototype":{
        textGroupName: "Group Name",
        textId: "Id",
        textDescription: "Description",
        textAddGroupButton: "Create A New Group",
        groupNameAlreadyTaken: "Group Name already taken",
        titleConfirmDeleteMsg: "Confirm delete group",
        textConfirmDeleteMsg: "Are you sure you want to delete this group?",
        textName: "Name",
        textRole: "Role",
        textGroup: "Group",
        textUsers: "Users",
        textSave: "Save",
        textClose: "Close",
        textDetails: "Details",
        tooltipGroupInfo: "Informations about this group",
        tooltipDelete: "Delete this Group"
    },
	"EmbedMapDialog.prototype": {
        publishMessage: "Your map is ready to be published to the web! Simply copy the following HTML to embed the map in your website:",
        heightLabel: "Height",
        widthLabel: "Width",
        mapSizeLabel: "Map Size",
        miniSizeLabel: "Mini",
        smallSizeLabel: "Small",
        premiumSizeLabel: "Premium",
        largeSizeLabel: "Large",
        loadMapText: "Load this Map (install application first)",
        downloadAppText: "Install Application",
        loadInMapStoreMobileText: "Mobile",
        openImageInANewTab: "Open Image in a New Tab"
    },

    "mxp.plugins.CategoriesInitializer.prototype":{
        geostoreInitializationTitleText: "Initialization Failed",
        geostoreInitializationText: "Geostore response is not the expected",
        notInitializedCategories: "Missing categories: '{0}'. Do you want to create it?",
        userFieldText: "User",
        passwordFieldText: "Password",
        acceptText: "Create",
        cancelText: "Cancel",
        notInitializedCategoriesWithCredentials: "<div class='initCategoriesMessage'>If you are an administrator please insert your credentials to create these categories: '{0}'</div>"
	},
    "mxp.form.UserGroupComboBox.prototype":{
        fieldLabel: "User Group"
    },
    "mxp.widgets.ResourceGroupPermissionGrid.prototype":{
        refreshText: "Refresh grid",
        addText: "Add a new security rule based on user groups",
        addNewSecurityRuleTitleText: "Create A New Security Rule",
        editSecurityRuleTitleText: "Edit Security Rule for group '{0}'",
        groupNameTitleText: "Error", 
        groupNameExistsText: 'Already exists a rule for this group name, please select another one or edit this rule',
        groupNameIncompleteText: 'No group selected. Please select one before save.',
        textSave:'Save',
        textClose:'Close',
        textGroupName: 'Group',
        textUserName: 'User',
        textCanRead: 'Can Read',
        textCanWrite: 'Can Write',
        editText: "Edit selected security rule",
        deleteText: "Delete selected security rule",
        trueBooleanText: "Yes",
        falseBooleanText: "No",
        confirmDeleteTitleText: "Delete Security Rule",
        confirmDeleteText: "Do you really want to delete the rule for the '{0}' group?"
    },
    "mxp.widgets.ResourceGroupPermissionWindow.prototype":{
        title:"Resource Permissions"
    },
    "MSMTemplatePanel.prototype":{
        title: "Template Editor",
        headerTitleText: "Header",
        footerTitleText: "Footer",
        sectionContentTitleText: "{0} Content",
        sectionCSSTitleText: "CSS Style",
        sectionLayoutConfigTitleText: "Layout config",
        borderText: "Border",
        animeCollapseText: "Anim. Collapse",
        hideCollapseText: "Hide Collapse",
        splitText: "Split",
        collapsibleText: "Collapsible",
        collapseModeText: "Collapse Mode",
        widthText: "Width",
        heightText: "Height",
        minWidthText: "Min Width",
        maxHeightText: "Max Height",
        failSuccessTitle: "Error",
        mapMetadataTitle: "Save a template",
        mapMedatataSetTitle: "",
        mapNameLabel: "Name",
        mapDescriptionLabel: "Description", 
        addResourceButtonText: "Save",
        templateSuccessMsgText: "Saved Succesfully",
        templateSuccessTitleText: "OK",
	    newTemplateText: "New",
	    saveTemplateText: "Save"
    },
	"MSMTemplateGridPanel.prototype":{
		textId: "Id",
		textName: "Name",
		textOwner: "Owner",
		textCreation: "Creation Date",
		textLastUpdate: "Last Update", 
	    tooltipSearch: "Type a name to search",
	    textReset: "Reset",
	    tooltipReset: "Clean search",
	    failSuccessTitle: "Error",
	    resizerText: "Templates per page",
	    tooltipDelete: "Delete template",
		deleteTemplateTitleText: "Attention",
		deleteTemplateBodyText: "Do you want to delete this template?"
	},
    "mxp.plugins.MapManager.prototype":{
        buttonText: "Map Manager",
        tooltipText: "Open Map Manager"
    },
    "mxp.plugins.TemplateManager.prototype":{
        buttonText: "Templates",
        tooltipText: "Open Templates Manager"
    },
	"MSMTemplateManager.prototype":{
		title: "Template Manager"
	},
    "mxp.widgets.GeoStoreResourceForm.prototype":{
        dataFieldLabel: "Resource",
        nameLabel: "Name",
        textAttribute: "Attributes",
        textGeneral: "General",
        descriptionLabel: "Description",
        visibilityLabel: "Visibility",
        textSave: "Save",
        savingMessage:"Saving...",
        loadingMessage: "Loading...",
        saveSuccessTitle:"Saved",
        saveSuccessMessage:"Resource saved succesfully",
        failSaveTitle: "Failed Saving resource",
        resourceNotValid: "Resource not valid",
        deleteSuccessMessage: "Resource Deleted Successfully",
        permissionTitleText: "Permissions"
    },
    "mxp.widgets.GeoStoreCategoryManager.prototype":{
        resourceListTitle: "Resources",
        emptyMessage: "No resource to display",
        displayMessage: "Displaying {0} - {1} of {2}",
		titleConfirmDeleteMsg: "Confirm delete resource",
		textConfirmDeleteMsg: "Are you sure you want to delete this resource?"
    },
    "mxp.plugins.GeoBatchFlows.prototype": {
        buttonText: "Workflows",
        flowsListTitle:'Flows',
        runButtonText: "Run",
        consumersGridTitle: 'Active',
        archivedGridTitle: 'Archived'
    },
    "mxp.widgets.GeoBatchFlowsGrid.prototype": {
        nameText: 'Title',
        descriptionText:'Description',
        loadingMessage: 'Loading...',
        runButtonTooltip:'Run',
        errorContactingGeobatch: 'Error loading flows from GeoBatch'
    },
    "mxp.widgets.GeoBatchConsumerGrid.prototype": {
        statusText: 'Status',
        startDateText: 'StartDate',
        fileText:'File',
        actionText:'Action',
        taskText:'Task',
        progressText:'Progress',
        refreshText:'Refresh',
        autoRefreshText:'Auto Refresh',
        descriptionText:'Description',
        tooltipDelete: 'Clear this',
        tooltipLog: 'Check Log',
        clearFinishedText: 'Clear Finished',
        archiveText: 'Archive Selected',
        loadingMessage: 'Loading...',
        cleanMaskMessage:'Removing runs...',
        textConfirmDeleteMsg: 'Do you confirm you want to delete this run? ',
        errorDeleteConsumerText:'There was an error while deleting run',
        errorArchiveConsumerText:'There was an error while archiving run',
        confirmClearText: 'Do you really want to remove all runs with SUCCESS or FAIL status?',
        titleConfirmClearMsg: 'Confirm',
        confirmArchiveText: 'Do you want to archive the selected runs?',
        titleConfirmArchiveMsg: 'Confirm',
        GWCButtonLabel: 'Tile Cache',
        errorContactingGeobatch: 'Error loading runs from GeoBatch',
        errorContactingGeostore: 'Error loading archived runs from GeoStore'
    },
    "mxp.widgets.GeoBatchRunLocal.prototype": {
        successText: "Success",
        errorText:"Error",
        runSuccessText: "The workflow has been started successfully<br/>"
    },
    "mxp.widgets.GeoBatchRunLocalForm.prototype": {
        runButtonText: "Run",
        uploadButtonText: "Upload",
        successText: "Success",
        errorText:"Error",
        runSuccessText: "The workflow has been started successfully<br/>"
    },
    "cookieChoices": {
        "cookieText": "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
        "dismissText": "I Agree",
        "linkText":"Learn more",
        "linkHref":"cookies-policy-en.html"
  }
});
