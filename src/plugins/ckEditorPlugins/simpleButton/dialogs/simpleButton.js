const defaultBtn =  { text: 'hello world', url: '', className: 'btn btn-primary', style: '' }
let btn = {...defaultBtn}

let timePreview;
let dialog;

class SimpleButton {
 	
 	load(CKEDITOR){

		CKEDITOR.dialog.add('simplebuttonDialog', function (editor) {			

			const init = function (){				
				btn = {...defaultBtn}
			}

			const clear = function(){
				document.getElementById('btn-preview').innerText = ''
				init()
			}

			const removeResetClass = function(){
				const dialogs = document.getElementsByClassName('cke_dialog_container')
				for(let i = 0; i < dialogs.length ; i++){
				    dialogs[i].classList.remove("cke_reset_all");
				}
			}

			
			const updatePreview = function(){		
				console.count('preview')		
				const preview = document.getElementById('btn-preview')
				preview.innerHTML = ''
				const b = createButton()
				preview.append(b)
			}


			const createButton = function() {
	 			const b = document.createElement('a');	
	 			//b.setAttribute('type', 'button')
				b.className = btn.className
				// b.innerText = dialog.getValueOf('bootrap-button','button-text')
				b.innerText = btn.text
				b.href = btn.url.length > 2 ? btn.url.length : '#'
				
				if(btn.style.length > 3 ) {
				  b.style.cssText= btn.style	
				}
				return b
 			}			
 			
			return {
				title: 'Bootstrap Button',
				minWidth: 400,
				minHeight: 200,
				contents: [
					{
						id: 'bootrap-button',
						elements: [
							{
								type: 'text',
								id: 'button-text',
								label: 'Text',
								'default': btn.text,

								//validate: CKEDITOR.dialog.validate.notEmpty("Text field cannot be empty."),
								
								onChange: function () {									
									btn.text = this.getValue()
									updatePreview()
								}
							},
							{
								type: 'text',
								id: 'button-url',
								label: 'URL',
								'default': btn.url,
								onChange: function () {									
									btn.url = this.getValue()
									updatePreview()
								}								
							},							
							{
								type: 'text',
								id: 'button-classes',
								label: 'Class',
								'default': btn.className,
								onChange: function () {										
									btn.className = this.getValue()
									updatePreview()								
								}								
							},
							{
								type: 'textarea',
								id: 'button-style',
								label: 'style ',
								onChange: function () {										
									btn.style = this.getValue()
									updatePreview()									
								}								
							},
							
							
							
							{type:'html',
							html:'<div id="btn-preview"></div>'},         
						]
					}
				],

				onLoad: function (){
          			removeResetClass()          			
		        },
		        onShow: function(){
		        	clear()
		        	dialog = this
		        	updatePreview()
		        },
		        onCancel:function () {
					clear();
				},
				onHide: function(){
					clear()
				},

				onOk: function () {
					const b = editor.document.createElement('a')
		 			b.setAttribute('class', btn.className)
		 			b.appendText(btn.text)
		 			b.setAttribute('href', (btn.url.length > 2 ? btn.url : '#'))				
				
					if(btn.style.length > 3 ) {					  
					  b.setAttribute('style', btn.style	)
					}
					editor.insertElement(b);
					clear();
				}
			};
		});
	}
}

//Export
const simpleButton = new SimpleButton()
export default simpleButton
export { simpleButton }