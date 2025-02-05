import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "AABB Calculation, Visualization and Culling", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
     <strong>AABB Calculation, Visualization and Culling</strong> is a modification of the PrimeEngine game engine. I calculated AABB values, visualization is done by using line renderers and culling is carried out b calculating the planes for the camera.
      <br/>If the video below doesn't work, <a href="https://www.youtube.com/watch?v=TB8eXTPQTMs" target="_blank">try here </a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=TB8eXTPQTMs" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Axis aligned bounding box(AABB)</li>
        <li>Visualization of bounding box for multiple objects using line renderers.</li>
        <li>Camera culling using bounding planes.</li>
        </ul>
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Collision and Physics", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>Collision and Physics</strong> is another modification to the PrimeEngine game engine done in C++. I added collision capabilities to the objects of the game engine by creating the physics manager. Physics checks collision and also adds gravity by checking collision between an object and the ground.
        <br/>If the video below doesn't work, <a target="_blank" href="https://www.youtube.com/watch?v=3cgWvpYIZIc">try here</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=3cgWvpYIZIc" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Physics manager created.</li>
        <li>Collision check of the meshes, with appropriate response.</li>
        <li>Physics added, by checking collision of mesh with the ground mesh and appropriate response.</li>
        <li>C++ and lua.</li>
        </ul>
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Initial Phase of Shader GUI", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>The Initial Phase of the Shader GUI</strong> is created using Python and the TKinter GUI library. The User interface modifies the color, the transparency, the roughness and shininess of the shader. It can also save or open the shader file which is currently being modified.
        <br/>If the video below doesn't work, <a target="_blank" href="https://www.youtube.com/watch?v=XeiB5Ize4_g">try here</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=XeiB5Ize4_g" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>First iteration of the Shader GUI.</li>
        <li>Uses Python and TKinter library.</li>
        <li>Modifies color, transparency, roughness and shininess of the shader.</li>
        </ul>
    </div>

    `, "#383838"),
    new ProjectData("project-4", "Node-based Shader GUI Editor", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>The node-based shader editor</strong> is the second phase of the Shader GUI. It is node-based, which means it uses nodes to modify the shader parameters, like the r,g, b and the glow values. The shader file can be opened using the “Open file” button. The contents of the shader file are displayed in the text editor, which is below the node editor. The changes made to the file contents can be saved using to the “Save file” button present. In case the nodes were not what was wanted, we have a refresh button which deletes the nodes.
    <br/>If the video below doesn't work, <a target="_blank" href="https://www.youtube.com/watch?v=kzUH6cggwYE">try here</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=kzUH6cggwYE" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Node-based shader GUI Editor.</li>
        <li>Uses nodes to modify the r,g,b and glow values.</li>
        <li>Python and TKinter GUI library.</li>
        <li>Open files, close files and refresh to clear the node canvas.</li>
        </ul>
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Node-based Shader Editor with Debug", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>The node-based shader editor with debug information</strong> is the final version of the shader editor. It contains real-time debug information of the shader currently being edited, for example the number of functions present in the shader, the number of return calls present and the current RGB and glow value of the shader. After this, whenever the values are changed in the editor, the debug panel shows the updated RGB Glow values for every decimal point of change. The last “Updated RGB” value before saving is the final value present in the shader.
        <br/>If the video below doesn't work, <a target="_blank" href="https://www.youtube.com/watch?v=K0xCBF1wWbA">try here</a>.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=K0xCBF1wWbA" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Real-time debug information.</li>
        <li>Python and TKinter GUI Library.</li>
        <li>Node-based shader editor.</li>
        </ul>
    </div>
`, "#e48246")
];