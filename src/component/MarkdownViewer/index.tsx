import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

interface MarkdownViewerProps {
  content: string;
}

function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <Viewer initialValue={content} />
  );
}

export default MarkdownViewer;
