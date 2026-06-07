// Tạo tài khoản admin mặc định nếu chưa có
let users = JSON.parse(localStorage.getItem('users')) || [];
if (!users.find(u => u.username === 'admin')) {
    users.push({
        fullname: 'Administrator',
        email: 'admin@buffmaster.com',
        username: 'admin',
        password: '12345',          // ← đổi thành 12345
        balance: 0,
        status: 'active',
        createdAt: new Date().toISOString(),
        history: [],
        role: 'admin'                // thêm role để phân biệt
    });
    localStorage.setItem('users', JSON.stringify(users));
}
