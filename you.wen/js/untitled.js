const makeUserProfilePage = o => `

<!--div class="user-img"><img src="${o.img}"></div>
<div class="pagepadding">
<div class="form-control">
<label for="signin-username" class="form-label">Username</label>
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.name}">
</div>
<label for="signin-username" class="form-label">Email</label>
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.email}">
</div>

 
<a href="#user-password-page"><button type="edit" class="form-button" data-role="none">Edit password</button></a>
 </div-->