import { PrismaClient } from '@prisma/client'
export default async function Page( ) {
    const prisma = new PrismaClient()

    //Get ALL the videos
    let videos = await prisma.video.findMany()

    const videoList = videos.map((video) => 
        <li key={video.id}>
            <a href={"/videos/video/"+video.id}>{video.name}</a>
            <a href={"/videos/update/"+video.id}>[edit]</a>
        </li> 

    )

    return( <div>  
        <h2>Videos</h2>
    

        <form> 
        {videoList}

        </form>
    </div> )
}
