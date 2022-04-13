function FooterHome() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-2 pb-5 ">
        <section class="mb-5">
          <div className="circle">
            <span>60"</span>
            <br />
            <span>SixtySeconds</span>
            <br />
            <hr />
            <a href="https://www.linkedin.com" target="_blank">
              LinkedinIcon{/* TODO: add linkedIn icon */}
            </a>
            <a href="https://twitter.com" target="_blank">
              TwitterIcon{/* TODO: add twitter icon */}
            </a>
            <a href="https://www.instagram.com" target="_blank">
              InstagramIcon{/* TODO: add instagram icon */}
            </a>
            <a href="https://www.facebook.com" target="_blank">
              FacebookIcon{/* TODO: add facebook icon */}
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default FooterHome;
