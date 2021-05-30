import React from 'react';
import FileSystemNavigator from '../components/Tree';
import { flexbox } from '@material-ui/system';
import { Box } from '@material-ui/core';

const Home = () => {
  if (typeof window !== 'undefined') {
    const AceEditor = require('react-ace').default;
    require('ace-builds/src-noconflict/mode-javascript');
    require('ace-builds/src-noconflict/theme-monokai');
    require('ace-builds/src-noconflict/ext-language_tools');
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="flex-end">
          <FileSystemNavigator />
          <AceEditor
            mode="javascript"
            theme="monokai"
            // onChange={onChange}
            value="console.log()"
            fontSize="16px"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            height="1000px"
            width="960px"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />
        </Box>
      </React.Fragment>
    );
  }
  return null;
};

export default Home;
