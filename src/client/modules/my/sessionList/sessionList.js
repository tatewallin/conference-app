import { LightningElement } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
    sessions = [];
    // this method is a lifecycle method defined in the custom element specification. It is called when the custom element is appended to the DOM
    // is also a good place to retrieve data
    connectedCallback() {
        getSessions().then(result => {
            this.sessions = this.allSessions = result;
        });
    }

    handleSearchKeyInput(event) {
        const searchKey = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter(
            session => session.name.toLowerCase().includes(searchKey)
        );
    }
}
