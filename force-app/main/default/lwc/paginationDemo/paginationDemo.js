import { LightningElement, wire, track} from 'lwc';
import getContacts from '@salesforce/apex/getDataClass.getContacts';

export default class PaginationDemo extends LightningElement {
    @track totalContacts;
    @track visibleContacts;

    @wire(getContacts, {})
    getContactRecs({error, data}) {
        if (error) {
            // TODO: Error handling
            console.log("error getting contact data");
        } else if (data) { 
            this.totalContacts = data;
        }
    }

    updateHandler(event){
        console.log(event.detail.records);
        this.visibleContacts = event.detail.records;
    }
}