import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ value, onChange }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image'
  ];

  return (
    <Box className="text-editor">
      {isClient && (
        <ReactQuill
          theme="snow"
          style={{ height: '120px' }}
          value={value}
          onChange={(value) => onChange(value)}
          modules={modules}
          formats={formats}
        />
      )}
    </Box>
  );
};

export default QuillEditor;
