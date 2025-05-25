import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';
import markdownStyles from './markdown-styles.module.css';

type MarkdownRendererProps = {
  content: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className={markdownStyles.markdown}>
      <ReactMarkdown
        components={{
          code(props) {
            const { className, children, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <div style={{ margin: '1em 0' }}>
                <SyntaxHighlighter
                  style={tomorrow as any}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...rest}>
                {children}
              </code>
            );
          },
          img(props) {
            return (
              <div className="relative w-full h-auto my-8">
                <Image
                  src={props.src || ''}
                  alt={props.alt || ''}
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md"
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
