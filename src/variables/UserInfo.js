class UserInfo {
    constructor(data) {
        this.key = data.key;
        this.id = data.id;
        this.name = data.name;
        this.nickname = data.nickname;
        this.phone = data.phone;
        this.role = data.role;
    }
}

const ROLE = {
    NONE: "NONE", // 권한 없음
    READ: "READ", // 읽기 권한
    WRITE: "WRITE", // 쓰기 권한
}

var userInfo = new UserInfo();

export default userInfo;
