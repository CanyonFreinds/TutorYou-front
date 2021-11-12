import React, { useRef } from 'react';
import _ from 'lodash';
import { Editor } from '@toast-ui/react-editor';

interface MarkdownEditorProps {
  onChange: (content: string) => void;
}

function MarkdownEditor({ onChange }: MarkdownEditorProps) {
  const editorRef = useRef<any>(null);

  const onChangeEditor = _.debounce(() => {
    onChange(editorRef.current.getInstance().getMarkdown());
  }, 1000);

  return (
    <Editor
      initialEditType="markdown"
      initialValue="# 이 곳에 내용을 입력해보세요"
      previewStyle="vertical"
      height="60rem"
      ref={editorRef}
      onChange={onChangeEditor}
    />
  );
}

export default MarkdownEditor;
