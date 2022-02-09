import { LightningElement, api } from 'lwc';
import { getSession } from 'data/sessionService';
// We use the @api decorator to define the sessionId setter method as public.
// That way you can provide a sessionId as an attribute of the my-session-details tag.
// Properties annotated with @api are reactive: when their value changes, the component is automatically rerendered.

export default class SessionDetails extends LightningElement {
    session;
    @api
    set sessionId(id) {
        this._sessionId = id;
        this.session = getSession(id);
    }

    get sessionId() {
        return this._sessionId;
    }

    handleSessionsClick() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
