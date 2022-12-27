import React from 'react';
import Modal from 'react-bootstrap/Modal';

const mapping = {
    usa1: 'Hoover Dam',
    usa2: 'Antelope Canyon',
    usa3: 'Grand Canyon', 
    usa4: 'Bryce Canyon',
    brazil1: 'Maresias Beach',
    brazil2: 'Sugarloaf Mountain',
    brazil3: 'Rio de Janeiro',
    brazil4: 'Sao Paulo',
    europe1: 'Amsterdam, Netherlands',
    europe2: 'Vienna, Austria',
    europe3: 'Zaanse Schans, Netherlands',
    europe4: 'Bruges, Belgium',
    europe5: 'Berlin, Germany',
    europe6: 'Dublin, Ireland',
    europe7: 'The Hague, Netherlands',
    europe8: 'Cologne, Germany'
}

class Photos extends React.Component {
    constructor(props) {
        super(props);
        var showVals = {};
        for (let key of Object.keys(mapping)) {
            showVals[key] = false;
        }
        this.state = {
            show: showVals
        };
        console.log(this.state.show)
    }

    modalHide(id) {
        const showCopy = {...this.state.show, [id]: false};
        this.setState({
            show: showCopy
        });
    }

    modalShow(id) {
        const showCopy = {...this.state.show, [id]: true};
        console.log(showCopy)
        this.setState({
            show: showCopy
        });
    }

    renderPhoto(country, i) {
        const src = './images/' + country + i + '.jpg';
        const id = country + i;

        return (
            <div className = "photo col-2 no-gutters" style = {{padding: 0}}>
                <button className = "photo" onClick = {() => this.modalShow(id)}>
                    <img src = {src} className = "photo"/>
                </button>
                <Modal 
                    show = {this.state.show[id]} 
                    onHide = {() => this.modalHide(id)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body style = {{padding: 0}}>
                        <img src = {src} className = "modal-photo"/>
                    </Modal.Body>
                    <Modal.Footer style = {{backgroundColor: "black", color: "#D3D3D3", border: "none", justifyContent: "center"}}>
                    <Modal.Title>{mapping[id]}</Modal.Title>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

    renderPhotoRow(country, lownum, highnum, showLoc = true) {
        var photos = [];
        for (var i = lownum; i <= highnum; i++) {
            photos.push(this.renderPhoto(country, i));
        }

        return (
            <div className = "row no-gutters" style = {{padding: 0}}>
                <div className = "col-2">
                    <div className = "location-container">
                        <div className = "location">{showLoc && country}</div>
                    </div>
                </div>
                {photos}
            </div>
        )
    }

    render() {
        return (
            <div id = "photos-container">
                <div className = "section-title">photography</div>
                {this.renderPhotoRow('usa', 1, 4)}
                {this.renderPhotoRow('brazil', 1, 4)}
                {this.renderPhotoRow('europe', 1, 4)}
                {this.renderPhotoRow('europe', 5, 8, false)}
            </div>
        )
    }
}

export default Photos;