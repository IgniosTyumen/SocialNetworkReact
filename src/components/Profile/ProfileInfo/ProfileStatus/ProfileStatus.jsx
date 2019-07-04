import React from 'react'


class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status : this.props.status
    };

    activateEditMode(){
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) =>{
        this.setState({
            status : event.currentTarget.value
        });
    };

    componentWillUnmount(){
        this.state = {
            editMode: false,
            status : this.props.status
        };
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "------------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onBlur={this.deactivateEditMode.bind(this)}
                            value={this.state.status}
                            autoFocus={true}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>

        );

    };

};

export default ProfileStatus;