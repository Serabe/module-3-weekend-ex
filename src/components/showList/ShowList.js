import React from "react";
import Show from "../show/Show.js";

const altImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV-SHOW'
const altRating = 'no rating'

class ShowList extends React.Component {
    constructor({list}) {
        super(list);
    }

    render() {
        console.log(this.props);
        return(
            <ul class="show__list">
                {this.props.showList.map((item) =>
                <Show
                    id={item.show.id}
                    image={item.show.image ? item.show.image.original : altImage}
                    name={item.show.name}
                    rating={item.show.rating.average ? item.show.rating.average : altRating}
                    status={item.show.status}
                />
                )}
            </ul>
        );
    }
}

export default ShowList;