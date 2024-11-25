/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function Header() {
	return(
		<div className='min-h-screen flex justify-center items-center bg-black'>
			<img src="image/Group 44.png" alt="Header Image" className="w-full object-fill"/>
		</div>
		
	)
}

function Footer() {
	return(
		<div>
			<img src="image/Rectangle 239.png" alt="Bottom Image" class="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-fill"/>
		</div>
	)
}

export default function save() {
	return (
		<div>
			<Header/>
			<Footer/>
		</div>
	);
}
