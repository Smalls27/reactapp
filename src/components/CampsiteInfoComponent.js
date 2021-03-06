import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments) {
        if (this.props.campsite.comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.props.campsite.comments.map(comment => {
                        return (
                            <div>
                                {comment.text}
                                <br></br>
                                --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                <br></br>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        }
        return (
            <div>

            </div>
        )
    }
}

export default CampsiteInfo;