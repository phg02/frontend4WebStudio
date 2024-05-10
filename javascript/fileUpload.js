document.addEventListener('DOMContentLoaded', function() {
    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.registerPlugin(FilePondPluginImageResize);
    FilePond.registerPlugin(FilePondPluginFileEncode);
    FilePond.setOptions({
        stylePanelAspectRatio: 256/256,
        imageResizeTargetWidth: 256,
        imageResizeTargetHeight: 256,
    })
    const inputElement = document.querySelector('input[type="file"]');
    const pond = FilePond.create(inputElement);
    FilePond.parse(document.body);
  });  

  //set up the plugin for uploading files