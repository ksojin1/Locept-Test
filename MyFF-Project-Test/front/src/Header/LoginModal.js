import React from "react";
import Modal from 'react-awesome-modal';
import Styles from "./Header.module.scss";

function LoginModal(props) {
    
    const closeModal = () => {
        props.closeModal();
        document.body.style = 'overflow: auto';
        document.getElementById("myMap")?.removeAttribute("hidden");
    }

    return (
        <Modal onClickAway={closeModal} visible={true} width="400" height="300" effect="fadeInDown">
                <div className={Styles.modalHead}>
                  <h1 className={Styles.loginText}>로그인</h1>
                  <input className={Styles.exitBtn} value="X" type="button" onClick={closeModal}/>
                </div>
                <div className={Styles.modalContent}>
                  아이디 <input type="text" placeholder="아이디"/>
                  비밀번호 <input type="text" placeholder="아이디"/>
                </div>
                <div>
                  <a href="#">아이디찾기</a>
                  <a href="#">비밀번호찾기</a>
                </div>
                <div className={Styles.modalBtn}>
                  <input className={Styles.loginBtn} type="button" value="로그인"/>
                  {/* <input className={Styles.loginBtn} type="button" value="로그인" onClick={loginTest}/> */}
                  <input className={Styles.joinBtn} type="button" value="회원가입" />
                </div>
        </Modal>
    );
}

export default LoginModal;