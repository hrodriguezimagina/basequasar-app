
import simpleButtonModal from 'src/plugins/ckEditorPlugins/simpleButton/dialogs/simpleButton.js'
import boostrapStyle from 'src/plugins/ckEditorPlugins/simpleButton/styles/bootstrap.css'


class PluginSimpleButton {
	load(CKEDITOR){
		CKEDITOR.plugins.add( 'simplebutton', {
			init: function( editor ) {				
				editor.addCommand( 'simplebutton', new CKEDITOR.dialogCommand( 'simplebuttonDialog' ) );
				editor.ui.addButton( 'simplebutton', {
					label: 'Simple Button',
					command: 'simplebutton',
					//icon: this.path + 'images/simplebutton.png',
					toolbar:'insert'
				});
				

				simpleButtonModal.load(CKEDITOR)
				CKEDITOR.dialog.add( 'simplebuttonDialog', simpleButtonModal );

				editor.addContentsCss(boostrapStyle.toString())
				
			}
		});
	}
}
const pluginSimpleButton = new PluginSimpleButton()
export default pluginSimpleButton