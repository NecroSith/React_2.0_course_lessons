import React from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';


export default class HousePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedHouse: 4,
            error: false
        }

        this.got = new GotService();

    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = id => {
        this.setState({ 
            selectedHouse: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                renderItem={item => item.name}
                getData={this.got.getResource('/houses?page=3&pageSize=5')}
                />
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse}
                tooltip='house'
                loadItem={this.got.getOneHouse(this.state.selectedHouse)}
                >
                <Field field='region' label='Region'/>
                <Field field='coatOfArms' label='Coat of Arms'/>
                <Field field='words' label='Words'/>
                <Field field='overlord' label='Overlord'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}