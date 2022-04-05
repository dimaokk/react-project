import React from "react";
import styles from "./ProfileStatus.module.css";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    console.log("ds", this);
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onClick={this.activateEditMode}>
            {this.props.status || "--------"}
          </span>
        ) : (
          <input
            onChange={this.onStatusChange}
            type="text"
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
            className={styles.input}
          />
        )}
      </div>
    );
  }
}
