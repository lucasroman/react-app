import React from "react";

class RenderIf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: "hidden" };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    if (this.state.visibility === "hidden") {
      this.setState({
        visibility: "visible"
      });

    } else {
      this.setState({
        visibility: "hidden"
      });
    }
  }

  render() {
    return (
      <>
        <h3>Toggle visibility of paragraph with link follow</h3>
        <a href="#example" onClick={this.toggleVisibility}>Link toggle</a><br />
        <p style={{ visibility: this.state.visibility }}>Paragraph</p>
      </>
    )
  }
}

export default RenderIf;
