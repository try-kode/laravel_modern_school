$(document).ready(function(){
    loadLoginForm();
});

function loadLoginForm(){
    var frmLogin = "";
    frmLogin +=`
            <div class="input-group mb-3">
                <input type="email" id="txtEmail" class="form-control" placeholder="Email">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="password" id="txtPassword" class="form-control" placeholder="Password">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                        <input type="checkbox" id="remember">
                        <label for="remember">
                            Remember Me
                        </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block btnLogin">Sign In</button>
                </div>
                <!-- /.col -->
            </div>
        `;
    $("#frmLogin").html(frmLogin);
}

$(document).on("click", ".btnLogin", function(e){
    e.preventDefault();
    var email = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    var formData = {
        email: email,
        password: password
    }

    $.ajax({
        url:"/authenticate/login",
        method: "POST",
        data: formData,
        dataType: 'JSON',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(response){
            if(response.success == true){
                console.log(response);
            }
            else{
                toastr.error('Authenticate failed!')
            }
        }
    })
})
