import React, { useRef } from 'react';
import _ from 'lodash';
import { Editor } from '@toast-ui/react-editor';

interface MarkdownEditorProps {
  onChange: (content: string) => void;
  initialValue?: string; 
}

function MarkdownEditor({ onChange, initialValue }: MarkdownEditorProps) {
  const editorRef = useRef<any>(null);

  const onChangeEditor = _.debounce(() => {
    onChange(editorRef.current.getInstance().getMarkdown());
  }, 500);

  return (
    <Editor
      initialEditType="markdown"
      initialValue={initialValue || ''}
      previewStyle="vertical"
      height="60rem"
      ref={editorRef}
      onChange={onChangeEditor}
    />
  );
}

export default MarkdownEditor;
