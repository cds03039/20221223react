import React from 'react';
import Counter from './hookk/Counter';
import Info from './hookk/Info';
import { useState } from 'react';
import Counter2 from './hookk/Counter2';
import Info2 from './hookk/Info2';
import Sweetalert from './boot/Sweetalert';
// This sample assumes that the application is using a CKEditor 5 editor built from source.
import { CKEditor, CKEditorContext } from '@cKditor/ckeditor5-react';

import Context from '@ckeditor/ckeditor5-core/src/context';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

const App2 = () => {
    const [visible,setVisible]=useState(false);
    return (
        <div>
            <button onClick={()=> {setVisible(!visible);}}>
                {visible ? "숨기기" : "보이기"}
            </button>
            {visible && <Info/>}
            <br/>
            <hr/>
            <br/>
            <Counter/>
            <br/>
            <hr/>
            <br/>
            <Counter2/>
            <br/>
            <hr/>
            <br/>
            <Info2/>
            <br/>
            <hr/>
            <br/>
            <Sweetalert/>
            <br/>
            <hr/>
            <br/>
            <div className="app">
                <CKEditorContext context={ Context }>
                    <h2>Using the CKeditor 5 context feature in React</h2>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            plugins: [ Paragraph, Bold, Italic, Essentials ],
                            toolbar: [ 'bold', 'italic' ]
                        } }
                        data="<p>Hello from the first editor working with the context!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor1 is ready to use!', editor );
                        } }
                    />

                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            plugins: [ Paragraph, Bold, Italic, Essentials ],
                            toolbar: [ 'bold', 'italic' ]
                        } }
                        data="<p>Hello from the first editor working with the context!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor1 is ready to use!', editor );
                        } }
                    />
                </CKEditorContext>
            </div>
        </div>
    );
};

export default App2;