import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "../../actions/blogAction";
import { useParams } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, blog } = useSelector((state) => {
    return state.blog;
  });

  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, [dispatch]);

  return (
    <>
      <div className="main-blog-div">
        <div className="blog-img-div">
          <img src="" alt="img" />
        </div>
        <div className="blog-info">
          <h1>{blog.title}</h1>
          <h3>Author: {blog.authorName}</h3>
          {/* <h2>{blog.description}</h2> */}
          <h2>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            non curabitur gravida arcu. Morbi non arcu risus quis varius quam.
            Duis ut diam quam nulla porttitor massa id. Ultrices in iaculis nunc
            sed augue. Commodo ullamcorper a lacus vestibulum sed arcu. Feugiat
            vivamus at augue eget arcu dictum varius duis at. Velit euismod in
            pellentesque massa placerat duis ultricies lacus sed. Et tortor
            consequat id porta nibh. Id interdum velit laoreet id donec
            ultrices. At tellus at urna condimentum mattis pellentesque id.
            Morbi quis commodo odio aenean. Ac ut consequat semper viverra nam
            libero justo laoreet. Volutpat blandit aliquam etiam erat. Purus non
            enim praesent elementum facilisis leo vel. Viverra nam libero justo
            laoreet sit amet cursus sit. Integer enim neque volutpat ac
            tincidunt vitae semper quis. Arcu cursus euismod quis viverra nibh
            cras pulvinar mattis nunc. Diam maecenas ultricies mi eget. Quis
            ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
            Interdum posuere lorem ipsum dolor sit amet consectetur. Sodales ut
            eu sem integer vitae. Tellus mauris a diam maecenas sed. Amet mattis
            vulputate enim nulla aliquet porttitor lacus luctus accumsan.
            Quisque egestas diam in arcu. Risus pretium quam vulputate dignissim
            suspendisse in est. Adipiscing bibendum est ultricies integer quis.
            Vitae ultricies leo integer malesuada nunc vel risus commodo
            viverra. Tempus iaculis urna id volutpat lacus laoreet non curabitur
            gravida. Ipsum a arcu cursus vitae congue mauris. Pretium fusce id
            velit ut tortor. Nunc sed velit dignissim sodales ut. At consectetur
            lorem donec massa sapien faucibus et molestie ac. Mattis rhoncus
            urna neque viverra. Ac auctor augue mauris augue neque gravida. Quam
            quisque id diam vel quam elementum pulvinar. Dignissim diam quis
            enim lobortis scelerisque. Nulla malesuada pellentesque elit eget
            gravida cum. Ultrices sagittis orci a scelerisque purus semper. Amet
            luctus venenatis lectus magna fringilla urna porttitor rhoncus
            dolor. Vestibulum lorem sed risus ultricies tristique. Posuere lorem
            ipsum dolor sit. Tincidunt praesent semper feugiat nibh sed. Ornare
            lectus sit amet est placerat in egestas. Tristique senectus et netus
            et malesuada. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis auctor. Pretium quam vulputate dignissim suspendisse.
            Interdum posuere lorem ipsum dolor. At tellus at urna condimentum
            mattis. Amet consectetur adipiscing elit pellentesque habitant morbi
            tristique. Eu volutpat odio facilisis mauris. Semper eget duis at
            tellus. Enim tortor at auctor urna nunc id. Non tellus orci ac
            auctor augue mauris. Facilisi cras fermentum odio eu feugiat pretium
            nibh ipsum. Sagittis orci a scelerisque purus semper eget duis at.
            Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Eu
            ultrices vitae auctor eu augue. Volutpat blandit aliquam etiam erat
            velit. Potenti nullam ac tortor vitae purus faucibus ornare
            suspendisse. Sit amet volutpat consequat mauris nunc congue nisi
            vitae suscipit. Egestas diam in arcu cursus euismod quis viverra.
            Aliquam etiam erat velit scelerisque in. Blandit massa enim nec dui.
            Aliquet sagittis id consectetur purus ut. Dignissim sodales ut eu
            sem integer. Sapien faucibus et molestie ac feugiat. Nunc
            scelerisque viverra mauris in aliquam sem fringilla ut. Ultricies
            leo integer malesuada nunc vel risus commodo viverra maecenas. Diam
            donec adipiscing tristique risus nec. Tortor vitae purus faucibus
            ornare suspendisse. In mollis nunc sed id semper. Nam at lectus urna
            duis convallis. Malesuada bibendum arcu vitae elementum. Feugiat
            nibh sed pulvinar proin. Turpis egestas maecenas pharetra convallis
            posuere. Fames ac turpis egestas sed tempus urna. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget. Consequat mauris nunc congue nisi vitae suscipit. Tincidunt id
            aliquet risus feugiat in ante metus dictum at. Rhoncus urna neque
            viverra justo nec. In dictum non consectetur a erat nam at lectus
            urna. In nisl nisi scelerisque eu ultrices vitae auctor eu. Est
            ultricies integer quis auctor elit sed vulputate. Neque laoreet
            suspendisse interdum consectetur libero id faucibus nisl. At erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan.
            Viverra vitae congue eu consequat. Dis parturient montes nascetur
            ridiculus mus. Ut placerat orci nulla pellentesque dignissim enim
            sit. Tincidunt lobortis feugiat vivamus at augue eget. Consectetur
            adipiscing elit ut aliquam purus sit amet luctus venenatis. Pulvinar
            etiam non quam lacus. Amet volutpat consequat mauris nunc congue
            nisi vitae. Lectus nulla at volutpat diam. Venenatis tellus in metus
            vulputate eu scelerisque felis imperdiet. Erat pellentesque
            adipiscing commodo elit. Arcu odio ut sem nulla pharetra diam sit.
            Odio ut enim blandit volutpat. Fusce ut placerat orci nulla
            pellentesque dignissim enim sit amet. Vitae proin sagittis nisl
            rhoncus mattis rhoncus urna. Sed sed risus pretium quam vulputate
            dignissim suspendisse in. Ut tristique et egestas quis ipsum
            suspendisse. Ut porttitor leo a diam sollicitudin tempor id. Augue
            mauris augue neque gravida. Ut consequat semper viverra nam libero
            justo laoreet sit amet. Sem et tortor consequat id porta. Elementum
            curabitur vitae nunc sed. Sagittis id consectetur purus ut faucibus
            pulvinar. Egestas quis ipsum suspendisse ultrices. Vestibulum morbi
            blandit cursus risus at ultrices mi. Cursus in hac habitasse platea.
            In hac habitasse platea dictumst vestibulum rhoncus est pellentesque
            elit. Imperdiet proin fermentum leo vel orci. Tincidunt tortor
            aliquam nulla facilisi cras fermentum odio. Sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae. Nunc eget
            lorem dolor sed viverra ipsum nunc aliquet. Tortor condimentum
            lacinia quis vel eros donec ac odio tempor. Elementum curabitur
            vitae nunc sed velit dignissim sodales ut. Nulla porttitor massa id
            neque aliquam vestibulum. Tristique et egestas quis ipsum
            suspendisse. Molestie nunc non blandit massa enim nec dui nunc.
            Dignissim enim sit amet venenatis urna cursus eget nunc. Volutpat
            consequat mauris nunc congue. Amet consectetur adipiscing elit ut.
            Dictumst quisque sagittis purus sit amet volutpat consequat. Ut eu
            sem integer vitae. Nullam eget felis eget nunc. Tristique senectus
            et netus et malesuada fames. Habitant morbi tristique senectus et
            netus et malesuada. Eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum. Ut sem viverra aliquet eget sit
            amet tellus.{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
