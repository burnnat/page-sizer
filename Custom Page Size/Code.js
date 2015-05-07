function onOpen(e) {
  DocumentApp.getUi()
      .createAddonMenu()
      .addItem('Set page size...', 'showDialog')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showDialog() {
  var ui = HtmlService.createTemplateFromFile('Dialog')
      .evaluate()
      .setWidth(250)
      .setHeight(145);
  DocumentApp.getUi().showModalDialog(ui, 'Custom page size');
}
