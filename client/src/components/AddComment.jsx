import React from 'react'
import { connect } from 'react-redux';

export function AddComment(){
    return(
        <div>
            <form>
                <input placeholder='Comment'/>
            </form>
        </div>
    );
}
export default connect(state=>state, {})(AddComment);