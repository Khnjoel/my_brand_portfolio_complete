
  tinyMCE.init({
    mode : "specific_textareas",
    editor_selector : "mceEditor",
    plugins:
    "casechange advcode advlist lists spellchecker formatpainter autoresize visualblocks tinydrive image link media imagetools wordcount",
  min_height: 380,
  menubar: false,
  toolbar: [
    "bold italic underline | forecolor | formatselect | alignleft aligncenter alignright | bullist numlist",
    "cut copy paste formatpainter removeformat | casechange visualblocks | spellchecker | link image media | code"
  ]
});