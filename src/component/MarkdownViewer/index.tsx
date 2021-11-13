import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as Style from './styled';

interface MarkdownViewerProps {
  content: string;
}

function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <Style.Container>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </Style.Container>
  );
}

export default MarkdownViewer;
