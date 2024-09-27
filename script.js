 // select all elements
		const userSearch = document.querySelector('.user-search');
		const searchBtn = document.querySelector('.btn');
		const nameShow = document.querySelector('.name');
		const imageShow = document.querySelector('.image');
		const bioShow = document.querySelector('.bio');
		const followerShow = document.querySelector('.follower');
		const followingShow = document.querySelector('.following');
		const reposShow = document.querySelector('.repos');
		const locationShow = document.querySelector('.location');
		const repoList = document.querySelector('.repo-list');
        
		const getProfile = async () => {
			let enterValue = userSearch.value;
// fetch for default user onload
            if (enterValue === "") {
            	enterValue = "shubhamjaga2002";
            }
			const api = `https://api.github.com/users/${enterValue}`;		
			const response = await fetch(api);
			const result = await response.json();			

// fetch profile

			nameShow.textContent = result.name;
			imageShow.src = result.avatar_url;
			bioShow.textContent = result.bio;
			followerShow.textContent = `${result.followers} Followers`;
			followingShow.textContent = `${result.following} Following`;
            reposShow.textContent = `${result.public_repos} Repos`;
            locationShow.textContent = result.location;

            
//fetch repositories  
			const reposApi = `https://api.github.com/users/${enterValue}/repos`;
			const reporesponse = await fetch(reposApi);
			const reporesult = await reporesponse.json();

			repoList.innerHTML = '';

		for (let repositories = 0; repositories < 5; repositories++) {
  				if (reporesult[repositories]) {
    			const repoTag = document.createElement("a");
    			repoTag.href = reporesult[repositories].html_url;
    			repoTag.textContent = reporesult[repositories].name;
    			repoTag.target = "_blank";
    			document.querySelector(".repo-list").appendChild(repoTag);
  }
}
            // const createATag = document.createElement("a");
            // createATag.href = reporesult[0].html_url;
            // createATag.textContent = reporesult[0].name;
            // createATag.target = "_blank";
            // document.querySelector(".repo-list").appendChild(createATag);                
		};

// fetch for default user onload function call
	window.onload = () =>{
			getProfile();
		}


		searchBtn.addEventListener("click",getProfile);
	// data fetch closed function
