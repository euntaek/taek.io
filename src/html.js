import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                var currentTheme;

                function setTheme(newTheme){
                  currentTheme = newTheme;
                  window.__theme = currentTheme;
                  document.body.className = newTheme;
                  console.log('setTheme', currentTheme, window.__theme);
                }

                try {
                  currentTheme = localStorage.getItem("theme") || 'light';
                  console.log('html.js', currentTheme);
                } catch(err){}
                setTheme(currentTheme);
                
                window.__theme = currentTheme;
                window.__onChangeTheme = function(newTheme) {
                  console.log('window onchange', newTheme);
                  setTheme(newTheme);
                  try { 
                    localStorage.setItem("theme", newTheme)
                  } catch(err) {}
                }
              })();
            `,
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
