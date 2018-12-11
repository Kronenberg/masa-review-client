import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
    render() {
        return (
            <div className='container formmasa'>
                <div className='row justify-content-center mt-5'>
                    <form className='col-8 card'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="form-group">
                                    <h3 className='mt-4 mb-4'>Create a Masa Review account</h3>
                                    <div className='row'>
                                        <input className="form-control mt-3 mb-4 ml-4 col-5"
                                               placeholder="Name"/>
                                        <input className="form-control mt-3 mb-4 ml-2 col-5"
                                               placeholder="Surname"/>
                                    </div>
                                    <input className="form-control mt-3 mb-4 ml-2 col-11"
                                           placeholder="Email"/>
                                    <div className='row'>
                                        <input type="password" className="form-control mt-2 ml-4 col-5"
                                               placeholder="Password"/>
                                        <input type="password" className="form-control mt-2 ml-2 col-5"
                                               placeholder="Confirm"/>
                                        <small className='text-left ml-2 mt-1 col-12'>The password must contain at least
                                            eight characters, including letters, numbers and special characters.
                                        </small>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='mb-2 mt-3 col-6'>
                                        <button className="btn btn-link">To come in</button>
                                    </div>
                                    <div className='mb-2 mt-3 ml-auto col-6'>
                                        <button type="submit" className="btn btn-primary">Further</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mt-5'>
                                <img src='http://www.israelprograms.com.au/wp-content/themes/twentytwelve/images/masa_sidebar.png' alt='formmasa'/>
                                <h4 className='text-secondary'>Share your expirience!</h4>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
            ;
    }
}

Form.propTypes = {};

export default Form;
