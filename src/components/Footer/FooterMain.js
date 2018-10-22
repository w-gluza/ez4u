import React, { Component } from "react";
import "../../css/style.css";
import Icon from "../../assets/icons/";

import { translate } from 'react-i18next';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__sections">
                        <div className="footer__section">
                            <div className="footer__header">{this.props.t('footer.section1.head')}</div>
                            <ul className="footer__list">
                                <li className="footer__list-item">{this.props.t('footer.section1.paragraph1')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section1.paragraph2')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section1.paragraph3')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section1.paragraph4')}</li>
                            </ul>
                        </div>

                        <div className="footer__section">
                            <div className="footer__header">{this.props.t('footer.section2.head')}</div>
                            <ul className="footer__list">
                                <li className="footer__list-item">{this.props.t('footer.section2.paragraph1')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section2.paragraph2')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section2.paragraph3')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section2.paragraph4')}</li>
                            </ul>
                        </div>

                        <div className="footer__section">
                            <div className="footer__header">{this.props.t('footer.section3.head')}</div>
                            <ul className="footer__list">
                                <li className="footer__list-item">{this.props.t('footer.section3.paragraph1')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section3.paragraph2')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section3.paragraph3')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section3.paragraph4')}</li>
                            </ul>
                        </div>

                        <div className="footer__section">
                            <div className="footer__header">{this.props.t('footer.section4.head')}</div>
                            <ul className="footer__list">
                                <li className="footer__list-item-subhead">{this.props.t('footer.section4.paragraph1')}</li>
                                <li className="footer__list-item">{this.props.t('footer.section4.paragraph2')}</li>
                                <li className="footer__list-item-subhead">{this.props.t('footer.section4.paragraph3')}</li>
                                <li className="footer__list-item"><a href="mailto:{this.props.t('footer.section4.paragraph4')}">{this.props.t('footer.section4.paragraph4')}</a></li>
                                <li className="footer__list-item-subhead">{this.props.t('footer.section4.paragraph5')}</li>
                                <li className="footer__list-item"><a href="mailto:{this.props.t('footer.section4.paragraph6')}">{this.props.t('footer.section4.paragraph6')}</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="footer__footer__container">
                        <p>&copy; {this.props.t('footerfooter.credentials')}</p>

                        <a href="https://www.facebook.com/ez4uteam/">
                            <Icon
                                name="facebook"
                                className="icon__social"
                                alt="Facebook logo"
                            />
                        </a>
                        <a href="https://www.youtube.com/user/ez4uteam">
                            <Icon name="youtube" className="icon__social" alt="YouTube logo" />
                        </a>
                        <a href="https://www.linkedin.com/company/ez4u/">
                            <Icon
                                name="linkedin"
                                className="icon__social"
                                alt="LinkedIn logo"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}


export default translate('common')(Footer);
