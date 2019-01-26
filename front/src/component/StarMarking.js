import React,{Component} from 'react';
import staricongrey from '../image/staricon_grey.svg';
import stariconblue from '../image/staricon_blue.svg';

class StarMarking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickIndex: 0,
            hoverIndex: 0,
        };
        this.getStar = this.getStar.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
        this.changeMarkingScore = this.changeMarkingScore.bind(this);
    }

    handleClick(index) {
        this.setState({
            clickIndex: index,
        });
        this.changeMarkingScore(index);
    }

    handleOnMouseEnter(index) {
        this.setState({
            hoverIndex: index,
        });
    }

    handleOnMouseOut() {
        this.setState({
            hoverIndex: 0,
        });
    }

    changeMarkingScore(index) {
        let item = {
            'module': this.props.data,
            'score': index
        };
        this.props.changeMarkingScore(item);
    }

    getStar() {
        let num = this.state.hoverIndex === 0 ? this.state.clickIndex : this.state.hoverIndex;
        let starContainer = [];
        const arr = [1, 2, 3, 4, 5];
        arr.map((ele, index) => {
            starContainer.push(
                <span
                    className="staricon"
                    onClick={this.handleClick.bind(this, ele)}
                    onMouseEnter={this.handleOnMouseEnter.bind(this, ele)}
                    onMouseOut={this.handleOnMouseOut.bind(this)}
                >
                    {ele > num ?
                        <img src={staricongrey} alt="灰星星" width="25" height="25"/>
                        :
                        <img src={stariconblue} alt="蓝星星" width="25" height="25"/>
                    }
                </span>
            );
        });
        return starContainer;
    }

    render() {
        let starItems = this.getStar();
        return (
            <div className="starmarking">
                <div className="functionname">{this.props.data}</div>
                <div className="starcontainer">
                    {starItems}
                </div>
            </div>
        )
    }
}


export default StarMarking;