# Từ UI basic-1.jpg
- Hãy phân tích các thuộc tính của Model product dựa vào UI basic-1.jpg.
- Tạo resource trên mockapi.io quản lý Model product trên.
- Code UI màn hình list product
+ Bao gồm list các sản phẩm
    -> mỗi 1 sản phẩm sẽ là 1 card UI như hình basic-1.jpg
    -> List product sẽ chia thành 3 column
{
    user = 'aptech' ,
    passw = 'aptech'
}

- Code form login
+ 2 input: username , password
+ btn login -> khi click
    - get username, passw tu 2 o input
    - so sanh vs account cho trc
    - neu === -> redirect sang man list
    - neu !=== -> alert('sai passw')

- Code navigation
+ list -> redirect sang list.html
        + click card product -> redirect sang detail.html?id=:id
+ form -> redirect sang form.html

+ btn logout: neu user da dang nhap
+ btn login : neu user chua dang nhap

- Check login (o file header.html):
+ add param islogin = true -> '/list.html?islogin=true'
+ save info user -> local stograge or cookie

- an hien btn: add class d-none || d-block

- Code detail
+ Show info cua product co id tuong ung