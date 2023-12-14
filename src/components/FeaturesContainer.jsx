import FeaturesCard from './FeaturesCard'

export default function FeaturesContainer () {
    return(
        <section className='feat-list'>
            <FeaturesCard title="Instant Server Start" description="On demand file serving over native ESM, no bundling required!" emoji="💡"/>
            <FeaturesCard title="Lightning Fast HMR" description="Hot Module Replacement (HMR) that stays fast regardless of app size." emoji="⚡️"/>
            <FeaturesCard title="Rich Features" description="Out-of-the-box support for TypeScript, JSX, CSS and more." emoji="🛠️"/>
            <FeaturesCard title="Optimized Build" description="Pre-configured Rollup build with multi-page and library mode support." emoji="📦"/>
            <FeaturesCard title="Universal Plugins" description="Rollup-superset plugin interface shared between dev and build." emoji="🔩"/>
            <FeaturesCard title="Fully Typed APIs" description="Flexible programmatic APIs with full TypeScript typing." emoji="🔑"/>
        </section>
    )
}