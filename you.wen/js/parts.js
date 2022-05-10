
const makeAnimalList = templater(o=>`
<li class="animal-list-item">
   <a href="#animal-profile-page" class="js-animal-jump" data-id="${o.id}">
      <div class="animal-list-image"><img src="${o.img}" alt=""></div>
      <div class="animal-list-body">
         <div class="animal-list-name">${o.name}</div>
         <div class="animal-list-type">Type: ${o.type}</div>
         <div class="animal-list-breed">Breed: ${o.breed}</div>
      </div>
   </a>
</li>
`);


const makeUserProfilePage = o => `
 
<div class="user-img"><img src="${o.img}"></div>
<div class="pagepadding">
<div class="form-control">
<label for="signin-username" class="form-label">Username</label>
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.name}">
</div>
<label for="signin-username" class="form-label">Email</label>
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.email}">
</div>

 
<a href="#user-password-page"><button type="edit" class="form-button" data-role="none">Edit password</button></a>
 </div> 

`;


const makeAnimalProfileDescription = o => `

 
<div class="pagepadding">
<div class="form-control">

<label for="signin-username" class="form-label">Cat Name 
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.name}">
</label><br>

<label for="signin-username" class="form-label">Cat Type 
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.type}">
</label><br>

<label for="signin-username" class="form-label">Cat Breed  
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.breed}">
</label><br>

 <a href="#animal-edit-page"><button type="edit" class="form-button" data-role="none">Edit password</button></a>


</div>


`;





const makeAnimalPopupBody = o => `
<div class="display-flex js-animal-jump noclick-children" data-id="${o.id}">

   <div class="animal-list-image"><img src="${o.img}" alt=""></div>
   <div class="pagepadding">
<div class="form-control">

<label for="signin-username" class="form-label">Cat Name 
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.name}">
</label><br>

<label for="signin-username" class="form-label">Cat Type 
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.type}">
</label><br>

<label for="signin-username" class="form-label">Cat Breed  
<input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.breed}">
</label><br>
</div>
`;



const FormControlInput = ({namespace,name,displayname,type,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <input data-role="none" class="form-input" type="${type}" placeholder="${placeholder}" id="${namespace}-${name}" value="${value}">
   </div>`;
}
const FormControlTextarea = ({namespace,name,displayname,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <textarea data-role="none" class="form-input" placeholder="${placeholder}" id="${namespace}-${name}">${value}</textarea>
   </div>`;
}


const makeAnimalForm = (animal,namespace = "animal-add") => {
return `
${FormControlInput({
   namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type a Name",
   value:animal.name,
})}
${FormControlInput({
   namespace,
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type a Type",
   value:animal.type,
})}
${FormControlInput({
   namespace,
   name:"breed",
   displayname:"Breed",
   type:"text",
   placeholder:"Type a Breed",
   value:animal.breed,
})}
${FormControlTextarea({
   namespace,
   name:"description",
   displayname:"Description",
   placeholder:"Type a Description",
   value:animal.description,
})}
`;
}


const makeUserForm = (user,namespace = "user-edit") => {
return `
${FormControlInput({
   namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type a Name",
   value:user.name,
})}
${FormControlInput({
   namespace,
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type a Username",
   value:user.username,
})}
${FormControlInput({
   namespace,
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type an Email",
   value:user.email,
})}
`;
}

