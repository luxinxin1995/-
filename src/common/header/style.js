import styled from 'styled-components';
import LogoPNG from '../../statics/nav-logo.png';
import BetaPNG from '../../statics/beta.png';
export const Border = styled.div`
    border-bottom:1px solid #f0f0f0;    
`
export const HeaderWrapper = styled.div`
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    height:56px;
    position:relative;
`
export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${LogoPNG});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    height:100%;
    padding-right:70px;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const Beta = styled.a.attrs({
    href:'/'
})`
    margin-top:15px;
    display:block;
    width:57px;
    height:25px;
    background:url(${BetaPNG});
    background-size:contain;
`
export const SearchWrapper = styled.div`
    float: left;
    position:relative;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused {
            color:#fff;
            background:#999;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:240px;
    height:38px;
    border:none;
    border-radius:19px;
    outline:none;
    margin:9px 0 0 20px;
    padding:0 35px 0 20px;
    background-color:#eee;
    color:#666;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:320px;
    }
    &.slide-enter{
        transition:all .5s ease-out;
    }
    &.slide-enter-active{
        width:320px;
    }
    &.slide-exit{
        transition:all .5s ease-out;
    }
    &.slide-exit-active{
        width:240px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:15px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`
