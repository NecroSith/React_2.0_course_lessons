import React from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';


export default class CharacterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedChar: null,
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
            selectedChar: id
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
                getData={this.got.getResource('/characters?page=6&pageSize=5')}
                />
        )

        const charDetails = (
            <ItemDetails 
                itemId={this.state.selectedChar}
                tooltip='character'
                loadItem={this.got.getOneCharacter(this.state.selectedChar)}
                >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails} />
        )
    }
}