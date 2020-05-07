import React from 'react'
import styles from './LoginModal.scss'
import classNames from 'classnames/bind'
import ModalWrapper from 'components/modal/ModalWrapper'

const cx = classNames.bind(styles)

const LoginModal = ({visible, password, error, onCancel, onLogin, onChange, onKeyPress}) => (
    <ModalWrapper visible={visible}>
        <div className={cx('form')}>
            <div onClick={onCancel} className={cx('close')}>&times;</div>
            <div className={cx('title')}>Admin Login</div>
            <div className={cx('description')}>Ender Password</div>
            <input autoFocus type="password" placeholder="Enter Password" value={password}
                onChange={onChange} onKeyPress={onKeyPress}/>
            {error && <div className={cx('error')}>Login Failure</div>}
            <div className={cx('login')} onClick={onLogin}>Login</div>
        </div>
    </ModalWrapper>
)

export default LoginModal