/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
      title: "DiffusionPID: Interpreting Diffusion via Partial Information Decomposition",
      authors: "Zawar, R., Dewan, S., et al.",
      conferences: "Submitted at Neurips 2024",
      researchYr: 2024,
      citebox: "popup1",
      image: "assets/images/research-page/diffusionPID.png",
      citation: {
        vancouver: "Zawar, R., Dewan, S., et al. DiffusionPID: Interpreting Diffusion via Partial Information Decomposition. Submitted at Neurips 2024.",
      },
      abstract: "Developed a novel method that can split the Mutual Information between 2 input words in a text prompt in the generated image into its inherent components of: Synergy, Redundancy and Uniqueness. Our method can help get masks of the area that each of these individual components corresponds to and also get a quantifiable value.",
      absbox: "absPopup1",
      paperLink: "https://arxiv.org/abs/2406.05191",
    },
    {
      title: "StableSemantics: A Synthetic Language-Vision Dataset of Semantic Representations in Naturalistic Image",
      authors: "Zawar, R., Dewan, S., et al.",
      conferences: "Submitted at Neurips 2024",
      researchYr: 2024,
      citebox: "popup2",
      image: "assets/images/research-page/stablesemantics.png",
      citation: {
        vancouver: "Zawar, R., Dewan, S., et al. StableSemantics: A Synthetic Language-Vision Dataset of Semantic Representations in Naturalistic Image. Submitted at Neurips 2024.",
      },
      abstract: "Leveraging human-generated prompts that correspond to visually interesting stable diffusion generations, we provide 10 image generations per phrase, and extract cross-attention maps for each image. We explore the semantic distribution of generated images, examine the distribution of objects within images, and benchmark captioning and open vocabulary segmentation methods on our data.",
      absbox: "absPopup2",
      paperLink: "https://arxiv.org/html/2406.13735v1",
      projectPage: "https://stablesemantics.github.io/StableSemantics/",
    },
    {
      title: "MaterialFusion: Enhancing Inverse Rendering with Material Diffusion Priors",
      authors: "Litman, Y., et al.",
      conferences: "Submitted at SIGGRAPH Asia 2024",
      researchYr: 2024,
      citebox: "popup3",
      image: "assets/images/research-page/materialfusion.png",
      citation: {
        vancouver: "Litman, Y., et al. MaterialFusion: Enhancing Inverse Rendering with Material Diffusion Priors. Submitted at SIGGRAPH Asia 2024.",
      },
      abstract: "We present StableMaterial, a 2D diffusion model prior that refines multi-lit data to estimate the most likely albedo and material from given input appearances. This model is trained on albedo, material, and relit image data derived from a curated dataset of approximately 12K artist-designed synthetic Blender objects called BlenderVault. The SDS signal from the 2D model is used in conjunction with the inverse rendering loss, improving the estimation of albedo and material.",
      absbox: "absPopup3",
      paperLink: "https://drive.google.com/file/d/1zHp4y6y4j_1SgmpJrCpa8y53hh8Fpeyx/view?usp=sharing",
    },
    {
      title: "Effect of Jensen-Shannon Divergence in Safe Multiagent RL",
      authors: "Zawar, R., et al.",
      conferences: "Accepted at ICLR 2024 (Tiny paper)",
      researchYr: 2024,
      citebox: "popup4",
      image: "assets/images/research-page/multiagentRL.png",
      citation: {
        vancouver: "Zawar, R., et al. Effect of Jensen-Shannon Divergence in Safe Multiagent RL. Accepted at ICLR 2024.",
      },
      abstract: "Here, we extend the Multi-Agent Constrained Policy Optimisation (MACPO) approach that maintains policy consistency using Kullback-Leibler (KL) divergence. We find that Jensen-Shannon (JS) Divergence, a symmetric measure, serves as a better alternative to KL divergence; its symmetric nature is more forgiving of extreme differences in policies.",
      absbox: "absPopup4",
      paperLink: "https://openreview.net/pdf/a6a17722b98fbfca3fda8a043ac1d1bb10a0e5c5.pdf",
    },
    {
      title: "Understanding Diffusion Model Images and Detection in the Frequency Domain",
      authors: "El-Gaaly, T., Zawar, R., et al.",
      conferences: "2023",
      researchYr: 2023,
      citebox: "popup5",
      image: "assets/images/research-page/diffusionFrequency.png",
      citation: {
        vancouver: "El-Gaaly, T., Zawar, R., et al. Understanding Diffusion Model Images and Detection in the Frequency Domain. 2023.",
      },
      abstract: "In this paper, we study DM-generated images, and discover that such images contain signature artifacts – not only in the spatio-visual domain in the form of peculiar patterns/textures, and lack symmetry but also in the frequency domain, where, DM generated images have lower spectral power at the high-end of the frequency spectrum; whereas state-of-the-art GAN generated and real images do not exhibit this bias. This can be interpreted in the spatio-visual domain as overly-smooth images that may look aesthetically pleasing, but from detection perspective are a tell-tale signature of DM generated images and generally do not occur in natural images.",
      absbox: "absPopup5",
      paperLink: "https://drive.google.com/file/d/142q_PRfctTYe61fRNLdNsAnaOfQx431V/view?usp=sharing",
    },
    {
      title: "Lifelong Compositional Feature Replays Beat Image Replays in Stream Learning",
      authors: "Talbot, M. B., Zawar, R., et al.",
      conferences: "TNNLS Journal 2022",
      researchYr: 2022,
      citebox: "popup6",
      image: "assets/images/research-page/crumb.png",
      citation: {
        vancouver: "Talbot, M. B., Zawar, R., et al. Lifelong Compositional Feature Replays Beat Image Replays in Stream Learning. TNNLS Journal 2022.",
      },
      abstract: "We propose a new continual learning algorithm, Compositional Replay Using Memory Blocks (CRUMB), which mitigates forgetting by replaying feature maps reconstructed by recombining generic parts. Just as crumbs together form a loaf of bread, we concatenate trainable and re-usable memory block vectors to compositionally reconstruct feature map tensors in convolutional neural networks.",
      absbox: "absPopup6",
      paperLink: "https://arxiv.org/abs/2104.02206",
    },
    {
      title: "Detecting Anomalies using Generative Adversarial Networks on Images",
      authors: "Zawar, R. et al.",
      conferences: "IMAVIS Journal 2022",
      researchYr: 2022,
      citebox: "popup7",
      image: "assets/images/research-page/anomaliesGAN.png",
      citation: {
        vancouver: "Zawar, R., et al. Detecting Anomalies using Generative Adversarial Networks on Images. IMAVIS Journal 2022.",
      },
      abstract: "In this work we developed an anomaly detection method using GANs, where the GAN learns the distribution of normal images helping it detect any outlier. By using 3 loses the Generator and discrimination are used for the classification.",
      absbox: "absPopup7",
      paperLink: "https://arxiv.org/abs/2211.13808",
    },  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
