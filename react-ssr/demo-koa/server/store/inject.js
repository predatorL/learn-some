export default (ctx, str) => {
    let _str = str;
    const {store_info} =ctx;
    _str = _str.replace('\"$_page_defaultData\"', JSON.stringify(store_info));
    return _str;
}
