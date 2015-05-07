function onOpen() {
  DocumentApp.getUi()
      .createAddonMenu()
      .addItem('Set page size...', 'showDialog')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showDialog() {
  var dialog = (
    HtmlService.createTemplateFromFile('Dialog')
      .evaluate()
      .setWidth(250)
      .setHeight(145)
  );

  DocumentApp.getUi().showModalDialog(dialog, 'Custom page size');
}

function getDimensions() {
  var body = DocumentApp.getActiveDocument().getBody();

  return {
    height: body.getPageHeight(),
    width: body.getPageWidth()
  };
}

function setDimensions(dimensions) {
  var body = DocumentApp.getActiveDocument().getBody();

  body.setPageHeight(dimensions.height);
  body.setPageWidth(dimensions.width);
}
