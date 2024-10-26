import React from 'react';

const WithContentEditable = (WrappedComponent) => {
  return class extends React.Component {
    handleInput = (event) => {
      // Optional: Handle the input or save state here if needed
      console.log(event.target.innerHTML);
    };

    render() {
      return (
        <div
          contentEditable="true"
          onInput={this.handleInput}
          suppressContentEditableWarning={true}
          style={{ outline: 'none' }} // Optional: Prevent outline when focused
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default WithContentEditable;
